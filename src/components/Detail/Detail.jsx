import React from 'react';
import './Detail.css';

const Detail=()=>{
    return(
        <div className='Detail'>

        
        <div className='main' >
            <h4 className='title'>ایران بلاک</h4>
            <p>تیم ایران بلاک با شرکت و کسب مقام نخست در مسابقات استارتاپ تریگر دانشگاه صنعتی شریف که با حمایت بانک شهر برگزار شده بود، فعالیت رسمی خود را در زمینه توسعه فناوری زنجیره بلوکی با سه عضو رسمی شروع کرده و هم اکنون با توسعه تیم و برنامه های کاری و پژوهشی خود با 15 عضو رسمی داخل و خارج از کشور و اعضای غیر رسمی در مرکز خدمات فناوری دانشگاه صنعتی شریف مستقر می باشد.</p>
            </div>
            <div className="fotter">
<div class="starrating risingstar d-flex justify-content-center flex-row-reverse">
            <input type="radio" id="star5" name="rating" value="5" /><label for="star5" title="5 star">5</label>
            <input type="radio" id="star4" name="rating" value="4" /><label for="star4" title="4 star">4</label>
            <input type="radio" id="star3" name="rating" value="3" /><label for="star3" title="3 star">3</label>
            <input type="radio" id="star2" name="rating" value="2" /><label for="star2" title="2 star">2</label>
            <input type="radio" id="star1" name="rating" value="1" /><label for="star1" title="1 star">1</label>
            
        </div>
        <span>میانگین رای کاربران  </span> <span class="badge badge-info">3.1</span>
            </div>
            
            </div>
            
              
       
    )
}

export default Detail;