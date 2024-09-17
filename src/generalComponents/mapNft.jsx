import React from 'react';
import { TbArrowsExchange } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { userContext } from '../userContext';
import { useContext } from 'react';
import { Button } from '@chakra-ui/react';

function MapNft({
  item,
  onClose,
  onOpen,
  isOpen,
  setClickedItem,
  clickedItem,
  deletingNft,
  handleDelete
}) {

  const [user, setUser] = useContext(userContext)

  return (
    <div>
      <Fade left>
        <div className="items-links shadow-1 px-2 py-2 rounded mx-3 my-4">
          <div className="item">
            <Link to={`/singleNft/${item.id}`}>
              <img src={item.imgUrl} alt="" className="item-img" />

            </Link>
            <div className="item-bidders">
              <img src="/client-1.png" alt="" className="item-bidderimg" />
              <img src="/client-3.png" alt="" className="item-bidderimg" />
              <img src="/client-4.png" alt="" className="item-bidderimg" />
              <p className='faint' style={{ fontSize: 12 }}>{item.totalBids ? item.totalBids : '9'}+ Placed bids</p>
            </div>
            <div className="item-name ls small-1 fw-bold">{item.user.name}</div>
            <div className="item-bids my-1 ls small-1">Highest bid ${Number(item.highestBid)}</div>
            <div className='flex_spaced'>
              <div className="item-price text-primary ls small-1 flex_left">
                <div className='me-2'>
                  {item.floorPrice}ETH
                </div>
                {Number(item.priceDollar) > 0 && <TbArrowsExchange />}

                {
                  Number(item.priceDollar) > 0 &&
                  <div className='ms-2'>
                    ${Number(item.priceDollar)?.toLocaleString()}
                  </div>
                }


              </div>
              {user.isAdmin &&
                <div className='flex_column'>

                  <Button
                    colorScheme='green'
                    size='sm'
                    style={{ width: '70px' }}
                    onClick={() => {setClickedItem(item) ; onOpen() }}
                  >
                    Edit
                  </Button>

                  <Button
                    size='sm'
                    style={{ width: '70px' }}
                    colorScheme='red'
                    className='mt-2'
                    isLoading={deletingNft}
                    onClick={() => { handleDelete(item)}}
                  >
                    Delete
                  </Button>

                </div>

              }
            </div>
            <br />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default MapNft;