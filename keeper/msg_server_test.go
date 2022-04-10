package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/cosmonaut/farmchain/testutil/keeper"
	"github.com/cosmonaut/farmchain/x/farmchain/keeper"
	"github.com/cosmonaut/farmchain/x/farmchain/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.FarmchainKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
