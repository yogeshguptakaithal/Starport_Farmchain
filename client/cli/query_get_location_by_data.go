package cli

import (
	"strconv"

	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetLocationByData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-location-by-data [timestamp] [crop] [temperature] [humidity] [soil-moisture] [growth-percentage]",
		Short: "Query getLocationByData",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTimestamp := args[0]
			reqCrop := args[1]
			reqTemperature := args[2]
			reqHumidity := args[3]
			reqSoilMoisture := args[4]
			reqGrowthPercentage := args[5]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetLocationByDataRequest{

				Timestamp:        reqTimestamp,
				Crop:             reqCrop,
				Temperature:      reqTemperature,
				Humidity:         reqHumidity,
				SoilMoisture:     reqSoilMoisture,
				GrowthPercentage: reqGrowthPercentage,
			}

			res, err := queryClient.GetLocationByData(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
