import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

type ItemType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  description: string;
};

type Props = {
  item: ItemType;
};

export const CardItem: React.FC<Props> = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '100%', height: '100%' }} src={item.download_url} />
      <Card.Body>
        <Card.Title>{item.author}</Card.Title>
        <Card.Text>
          {showFullText ? item.description : `${item.description?.slice(0, 50)}...`}
          {!showFullText && item.description?.length > 50 && (
            <>
              <br />
              <Button
                variant="link"
                size="sm"
                onClick={() => setShowFullText(true)}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Show more...
              </Button>
            </>
          )}
          <hr style={{ margin: '10px 0px' }} />
          <div className="d-flex justify-content-start">
            <Button
              variant="primary"
              size="sm"
              style={{
                marginRight: '10px', backgroundColor: 'orange', border: 'orange', color: 'white',
              }}
            >
              Save to collection
            </Button>
            <Button variant="secondary" size="sm" style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}>Share</Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
