import {
  AppContainer,
  ChartsRow,
  Chart,
  Header,
  Error,
  ErrorContainer,
} from "./styled";
import { TApiResponse, useApiGet } from "./hooks/useApiGet";
import { MOCK_APR_HISTORY, MOCK_TVL_STAKED_HISTORY } from "./consts";
import InfoCard from "./components/InfoCard";

const MOCK_ASSET_ID = "BNB_Pancakeswap__WBNB-BUSD";

const App = () => {
  const { data, loading, error }: TApiResponse = useApiGet(
    "/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000"
  );

  const filteredAsset = data?.data?.find(
    (d: any) => d.assetId === MOCK_ASSET_ID
  );

  const { blockchain, farm, dateUpdated, yieldType, rewardTokenB, asset } =
    filteredAsset ?? {};

  if (error) {
    return (
      <AppContainer>
        <ErrorContainer>
          <Error>Ops, something went wrong.</Error>
        </ErrorContainer>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <Header>
        {filteredAsset && (
          <>
            {farm}: <span>{asset}</span>
          </>
        )}
      </Header>

      <ChartsRow>
        <Chart
          title="Asset APR (y)"
          data={MOCK_APR_HISTORY}
          type="percentage"
          domain={[0, 28]}
          loading={loading}
          error={error}
        />
        <Chart
          title="Asset TVL"
          data={MOCK_TVL_STAKED_HISTORY}
          type="currency"
          domain={[240000000, 300000000]}
          loading={loading}
          error={error}
        />
      </ChartsRow>

      <InfoCard
        blockchain={blockchain}
        farm={farm}
        dateUpdated={dateUpdated}
        yieldType={yieldType}
        rewardTokenB={rewardTokenB}
        loading={loading}
      />
    </AppContainer>
  );
};

export default App;
