package cli

import (
	"context"

	"github.com/cosmonaut/farmchain/x/farmchain/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListLocationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-location-data",
		Short: "list all locationData",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllLocationDataRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.LocationDataAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowLocationData() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-location-data [timestamp] [location]",
		Short: "shows a locationData",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argTimestamp := args[0]
			argLocation := args[1]

			params := &types.QueryGetLocationDataRequest{
				Timestamp: argTimestamp,
				Location:  argLocation,
			}

			res, err := queryClient.LocationData(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
