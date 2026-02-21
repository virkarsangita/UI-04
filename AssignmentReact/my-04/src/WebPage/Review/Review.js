import Header from "../../ComponetWebPage/Header/Header";
import './Review.css';
import review from '../../WebAssests/img/review_1.png';
import review1 from '../../WebAssests/img/review_2.png';
import review2 from '../../WebAssests/img/review_3.png';
import review3 from '../../WebAssests/img/review_4.png';
const Review=()=>{
    return<>
      <Header/>

    <div className="container col-md-12">
      <div className="row ">
 
        <div className="col-md-3 mt-4">
          <div className="card">
            <div className="card-header ">
              <img src={review} className="hover-image"  style={{margin: '5', height: 200, borderRadius:'50%',width: '200px' }}></img>
           <h2 className="mt-2">John Deo</h2>
            </div><div className="card-body">
              <p style={{transform: 'scale(1.1)', transform: 'scale(1.1)',cursor: 'pointer',  boxshadow:'0px 4px 10px rgba(0,0,0,0.3)'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
            </div>


          </div>
        </div>

        <div className="col-md-3 mt-4">
           <div className="card">
            <div className="card-header ">
              <img src={review1} className="hover-image"  style={{margin: '5', height: 200, borderRadius:'50%',width: '200px' }}></img>
          <h2 className="mt-2">John Deo</h2>
            </div>

            <div className="card-body">
              <p style={{transform: 'scale(1.1)',transform: 'scale(1.1)',cursor: 'pointer',  boxshadow:'0px 4px 10px rgba(0,0,0,0.3)'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
            </div>

          </div>
        </div>

        <div className="col-md-3 mt-4">
           <div className="card">
            <div className="card-header ">
              <img src={review2} className="hover-image"  style={{margin: '5', height: 200, borderRadius:'50%',width: '200px' }}></img>
            <h2 className="mt-2">John Deo</h2>
            </div>

            <div className="card-body">
              <p style={{transform: 'scale(1.1)',transform: 'scale(1.1)',cursor: 'pointer',  boxshadow:'0px 4px 10px rgba(0,0,0,0.3)'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
            </div>
          </div>
        </div>

         <div className="col-md-3 mt-4">
           <div className="card">
            <div className="card-header ">
              <img src={review3} className="hover-image"  style={{margin: '5', height: 200, borderRadius:'50%',width: '200px' }}></img>
              <h2 className="mt-2">John Deo</h2>
            </div>

            <div className="card-body">
              <p style={{transform: 'scale(1.1)',transform: 'scale(1.1)',cursor: 'pointer',  boxshadow:'0px 4px 10px rgba(0,0,0,0.3)'}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        dolor sit amet consectetur adipisicing elit. Dolores soluta ullam ipsa voluptates 
                        repudiandae dignissimos deleniti mollitia eum. Laudantium placeat velit nemo illo 
                        pariatur. Fuga aperiam impedit illo atque repellendus!
                    </p>
            </div>
          </div>
         </div>


        </div>
</div>

  
    </>
}

export default Review;