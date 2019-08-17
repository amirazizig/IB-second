import React from 'react';
import './Comment.css';
const Comment=()=>{
    return(
        <div className='Comment'>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">نظرتون رو وارد کنید </label>
    <textarea id="form7" class="md-textarea form-control" rows="2"></textarea>
  </div>
 
  
  <button type="submit" class="btn btn-info ">ارسال</button>
</form>

<div className='comment-box col-9'>
    <h6>فرستنده : صادق بارانی</h6>
    <p>ممنون از پیگیریتون خدا خیرتون بده . مرسی از تیم ایران بلاک </p>
</div>
<a className='more' href="#">بیشتر ...</a>
        </div>
    )
}

export default Comment;