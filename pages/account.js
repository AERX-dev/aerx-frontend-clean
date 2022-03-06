import Layout from "../components/Layout";
import {
  Box,
  Heading,
  Image as ChakraImage,
  useColorModeValue,
} from "@chakra-ui/react";
import supabase from "../lib/supabase";
import { profileStore } from "../stores/profile";
import useTranslation from "next-translate/useTranslation";
import { useRef, useState, useEffect, useReducer } from "react";
import { getTotalSupply, sendToken } from "../lib/tokenContract";
import { createUserProfileNFT } from "../lib/NFTContract";
import { registerUserIfNotRegistered } from "../lib/auth";
import { nearStore } from "../stores/near";
import CreateProfileForm from "../components/Account/Form";
// import { upload } from "../pages/api/crust"

const Page = () => {

    // The profile picture which will go into the NFT
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    fullName: "",
    aboutMe: "",
    profileImgCid: "",
  });

  // The uploaded image which will be deployed through IPFS
  const [uploadImg, setUploadImg] = useState();

  // const nearState = nearStore((state) => state);

  // const profileId = state.accountId; //"samullman.testnet"
  // const profileState = profileStore((state) => state);
  // const [profileLoaded, setProfileLoaded] = useState(false);
  // const [profile, setProfile] = useState(
  //   profileState.profile || { posts: [], follows: [] },
  // );
  const { t } = useTranslation("account");
  const picBg = useColorModeValue("gray.200", "gray.700");
  // const widgetApi = useRef();
  // const widgetApiHeader = useRef();

  function profileImageChange(event) {
    const { files } = event.target;
    if (files && files.length) {
      console.log(files);
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];

      // TODO assert that it is a image file
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
      setUploadImg(URL.createObjectURL(event.target.files[0]));
      // document.querySelectorAll(".profile-picture")[0].value = info.cdnUrl;
    }
  }

  //   function headerImageChange(info) {
  //     let newProfile = profile;
  //     newProfile.headerImage = info.cdnUrl;
  //     setProfile(newProfile);
  //   }

  //   function handleChange(event, currentVal) {
  //     console.log(event.target);
  //     const value = event.nativeEvent.data;
  //     setState({
  //       ...state,
  //       [event.target.placeholder]: currentVal + value,
  //     });
  //   }

  function update(e) {
    let path = e.currentTarget.dataset.path;
    let newProfile = profile;
    newProfile[path] = e.currentTarget.value;
    setProfile(newProfile);
  }

  async function save() {
    let profileToSave = JSON.parse(JSON.stringify(profile));
    console.log(profileToSave);
    delete profileToSave.follows;
    delete profileToSave.posts;
    if (nearState.tokenContract) {
      registerUserIfNotRegistered(nearState);
    }
    const { data, error } = await supabase
      .from("profiles")
      .update(profileToSave)
      // .match({ walletId: profileId })
      .match({ walletId: profileToSave.walletId });

    if (!error && data.length) {
      setProfile(data[0]);
      profileState.setProfile(data[0]);
    } else {
      console.log(error);
    }
  }

  async function handleSave() {
    //1. Put the values from our fields into a JSON
    const data = JSON.stringify(profile);
    //2. Send the json over to IPFS & get the link for the data
    await fetch("/api/ipfs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      //3. Put the link to JSON's ipfs into NFTTokenMetadata object
      .then((data) => createUserProfileNFT(nearState, profileId, data.uri)); // use the returned content uri
  }

  //   function hiddenValue() {
  //     if (profileState.profile) {
  //       return <input type="hidden" value={profileState.profile.walletId} />;
  //     }
  //   }

  //   if (profileState.profile && profileLoaded === false) {
  //     setProfile(profileState.profile);
  //     setProfileLoaded(true);
  //   }

  //   if (profileState.profile != profile && profileState.profile) {
  //     setProfile(profileState.profile);
  //   }

  return (
    <Layout>
      {/* {hiddenValue()} */}
      <Box className="px-4 md:px-10" py={2} maxWidth={1100} margin="0 auto">
        <Heading as="h1" mb={3}>
          {t("title")}
        </Heading>
        <CreateProfileForm
          t={t}
          picBg={picBg}
          profile={profile}
          uploadImg={uploadImg}
        //   profileImage={profileImage}
          // widgetApi={widgetApi}
          profileImageChange={profileImageChange}
          update={update}
          save={save}
        />
        {/* <Button colorScheme="green" mt={2} size="lg" onClick={handleSave}>
          {t('label.save')}
        </Button> */}
      </Box>
    </Layout>
  );
};

export default Page;
