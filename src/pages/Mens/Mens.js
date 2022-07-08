import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './MensComponent/MensList.scss';
import './Mens.scss';

const Mens = () => {
  // const [mensList, setMensList] = useState();
  const params = useParams();
  const navigate = useNavigate();

  //백엔드 API
  // useEffect(() => {
  //   fetch(`http://10.58.7.109:8000/products/categories/${params.id}/types`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setMensList(res.message);
  //     });
  // }, [params.id]);

  // console.log(mensList);

  return (
    <div>
      <div className="mens">
        <div className="pageContainer">
          {params.id < 2 ? <h2>남성복</h2> : <h2>여성복</h2>}
          <div>
            {params.id < 2 ? (
              <img
                className="categoryImg"
                src="/images/menswear/남성복.jpg"
              ></img>
            ) : (
              <img
                className="categoryImg"
                src="/images/womenswear/여성복.jpg"
              ></img>
            )}
          </div>

          {/* 백엔드 API를 가져와서 보여주는 view
          <div className="smallImage">
            {mensList &&
              mensList.map(men => {
                return <MensList key={men.type_id} men={men} />;
              })}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Mens;
