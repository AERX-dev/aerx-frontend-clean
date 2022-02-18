# Sets up the environment to run a local blockchain
# 1. install the module that sets it all up
# 2. Download the script & setup permissions
# 3. Run the script
setup-local:
	brew install kurtosis-tech/tap/kurtosis-cli
	curl -o ~/launch-local-near-cluster.sh https://raw.githubusercontent.com/kurtosis-tech/near-kurtosis-module/master/launch-local-near-cluster.sh -L
	chmod u+x ~/launch-local-near-cluster.sh
	~/launch-local-near-cluster.sh

# Assuming all your local ENV vars are in .env.local file
.PHONY: source
run-local:
	. env.local 
	~/launch-local-near-cluster.sh
