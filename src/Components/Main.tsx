import React, { useEffect, useState } from 'react';
import {
  Nav, Container, Row, Col,
} from 'react-bootstrap';
import {
  faImages, faSmile, faClock, faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardItem } from './CardItem';

type ItemType = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  description: string;
};

export const Main: React.FC = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<ItemType[]>([]);

  // const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  // Mauris sit amet metus quis velit gravida sodales.
  // Vivamus nec turpis euismod, vulputate enim eget
  // eslint-disable-next-line max-len
  // ultricies urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vestibulum massa ac nisi posuere laoreet. Nunc id metus ut arcu sollicitudin ullamcorper. Ut fermentum turpis ut ex ultrices, a suscipit nisi placerat. Duis quis sapien nulla. Aliquam at semper lorem, eu pretium purus. Donec eu augue nec mauris dictum ullamcorper. Integer mattis auctor augue, eu gravida sapien ultrices a. Sed vitae volutpat urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

  // Example usage:
  // const randomText = getRandomText(50);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`)
      .then((response: Response) => response.json())
      .then((data: ItemType[]) => setItems(
        data.map((item) => ({
          ...item,
          description:
           'Mauris sit amet metus quis velit gravida sodales.Mauris sit amet metus quis velit gravida sodales.',
        })),
      ));
  }, [page, items]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop
        !== document.documentElement.offsetHeight
      || items.length >= 300
    ) {
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <Container mt-4="true">
      <Row>
        <Col className="pr-3" xs={3}>
          <Nav className="flex-column justify-content-start">
            <Nav.Link href="#photos" active className="bg-warning text-white rounded" style={{ backgroundColor: 'orange' }}>
              <FontAwesomeIcon icon={faImages} className="mr-2" style={{ marginRight: '8px' }} />
              All photos
            </Nav.Link>
            <Nav.Link href="#selfies" className="text-dark">
              <FontAwesomeIcon icon={faSmile} className="mr-2 text-muted" style={{ marginRight: '8px' }} />
              Selfies
            </Nav.Link>
            <Nav.Link href="#recent" className="text-dark">
              <FontAwesomeIcon icon={faClock} className="mr-2" style={{ marginRight: '8px' }} />
              Recent
            </Nav.Link>
            <Nav.Link href="#deleted" className="text-dark">
              <FontAwesomeIcon icon={faTrash} className="mr-2" style={{ marginRight: '8px' }} />
              Deleted
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={12} md={{ span: 6, offset: 1 }}>
          <Row>
            <Col xs={12} sm={6}>
              <div className="text-left">
                <h3>All photos</h3>
                <p>150 items</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={{ span: 3, offset: 2 }} className="text-right">
              <div className="d-flex justify-content-center justify-content-sm-end">
                <button type="button" className="btn btn-dark mr-1 mb-1 mb-sm-0">Newest</button>
                <button type="button" className="btn btn-light">Latest</button>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="d-flex flex-wrap justify-content-center justify-content-sm-start">
              {items.slice(0, page * 9).map((item: ItemType) => (
                <div key={item.id} className="mx-2 mt-3">
                  <CardItem item={item} />
                </div>
              ))}
            </div>
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
