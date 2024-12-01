import { useNavigate } from 'react-router-dom';
import { Card } from "@consta/uikit/Card"
import { Layout } from "@consta/uikit/Layout"
import { Text } from "@consta/uikit/Text"

const MyCard = ({ imgURI, name, desc, id, height }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', flex: '0 1 calc(50% - 10px)', margin: '2.5px', height: height }}>
      <Card style={{ minHeight: "100px", width: "100%" }}>
        <Layout direction="row">
          <img src={imgURI} alt={name} style={{ minWidth: "50px", maxWidth: "50px", objectFit: "cover" }} />
          <Layout direction="column">
            <Text weight="bold">{name}</Text>
            <Text weight="regular">{desc}</Text>
          </Layout>
        </Layout>
      </Card>
    </div>
  );
};

export default MyCard;
