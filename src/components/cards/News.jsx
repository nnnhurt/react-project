import { Card } from "@consta/uikit/Card";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";

const NewsCard = ({ title, description, date }) => {
  return (
    <div style={{ flex: '1 1 calc(50% - 5px)', margin: '2.5px' }}>
      <Card style={{ minHeight: "150px", width: "100%", position: 'relative', padding: "15px" }}>
        <Layout direction="column" style={{ height: '100%' }}>
          <Text weight="bold" style={{ marginBottom: '10px' }}>{title}</Text>
          <Text weight="regular" style={{ flexGrow: 1 }}>{description}</Text>
          <Text weight="regular" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>{date}</Text>
        </Layout>
      </Card>
    </div>
  );
};

export default NewsCard;
