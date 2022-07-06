import { StyledInfoCard, LoaderContainer } from "./styled";
import ClipLoader from "react-spinners/ClipLoader";

interface InfoCardProps {
  blockchain: string;
  farm: string;
  dateUpdated: string;
  yieldType: string;
  rewardTokenB: string;
  loading: Boolean;
}

const InfoCard = ({
  blockchain,
  farm,
  dateUpdated,
  yieldType,
  rewardTokenB,
  loading,
}: InfoCardProps) => {
  if (loading) {
    return (
      <StyledInfoCard>
        <LoaderContainer>
          <ClipLoader color="#d750ff" size={35} />
        </LoaderContainer>
      </StyledInfoCard>
    );
  }

  return (
    <StyledInfoCard>
      <div>
        <h5>Blockchain</h5>
        <span>{blockchain}</span>
      </div>
      <div>
        <h5>Farm</h5>
        <span>{farm}</span>
      </div>
      <div>
        <h5>Last Updated</h5>
        <span>{dateUpdated}</span>
      </div>
      <div>
        <h5>Yield Type </h5>
        <span>{yieldType}</span>
      </div>
      <div>
        <h5>Rewards Token</h5>
        <span>{rewardTokenB}</span>
      </div>
    </StyledInfoCard>
  );
};

export default InfoCard;
