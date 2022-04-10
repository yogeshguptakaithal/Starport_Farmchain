package farmchain

import (
	"math/rand"

	"github.com/cosmonaut/farmchain/testutil/sample"
	farmchainsimulation "github.com/cosmonaut/farmchain/x/farmchain/simulation"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = farmchainsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateLocationData = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateLocationData int = 100

	opWeightMsgUpdateLocationData = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateLocationData int = 100

	opWeightMsgDeleteLocationData = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteLocationData int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	farmchainGenesis := types.GenesisState{
		LocationDataList: []types.LocationData{
			{
				Creator:   sample.AccAddress(),
				Timestamp: "0",
				Location:  "0",
			},
			{
				Creator:   sample.AccAddress(),
				Timestamp: "1",
				Location:  "1",
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&farmchainGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateLocationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateLocationData, &weightMsgCreateLocationData, nil,
		func(_ *rand.Rand) {
			weightMsgCreateLocationData = defaultWeightMsgCreateLocationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateLocationData,
		farmchainsimulation.SimulateMsgCreateLocationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateLocationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateLocationData, &weightMsgUpdateLocationData, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateLocationData = defaultWeightMsgUpdateLocationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateLocationData,
		farmchainsimulation.SimulateMsgUpdateLocationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteLocationData int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteLocationData, &weightMsgDeleteLocationData, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteLocationData = defaultWeightMsgDeleteLocationData
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteLocationData,
		farmchainsimulation.SimulateMsgDeleteLocationData(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
