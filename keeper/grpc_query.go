package keeper

import (
	"github.com/cosmonaut/farmchain/x/farmchain/types"
)

var _ types.QueryServer = Keeper{}
