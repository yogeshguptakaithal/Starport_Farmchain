package farmchain_test

import (
	"testing"

	keepertest "github.com/cosmonaut/farmchain/testutil/keeper"
	"github.com/cosmonaut/farmchain/testutil/nullify"
	"github.com/cosmonaut/farmchain/x/farmchain"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.FarmchainKeeper(t)
	farmchain.InitGenesis(ctx, *k, genesisState)
	got := farmchain.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
