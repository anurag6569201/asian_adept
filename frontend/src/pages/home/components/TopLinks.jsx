import "bootstrap-icons/font/bootstrap-icons.css";
import '../css/top_links.css'

function TopLinks() {
    return (
        <div className="top_links_container">
            <div class="container top_links">
                <div class="tip">Share</div>
                <div class="share-window">
                    <div class="share-bar">
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-facebook"></i></a></div>
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-twitter-x"></i></a></div>
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-pinterest"></i></a></div>
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-linkedin"></i></a></div>
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-whatsapp"></i></a></div>
                        <div class="trigger"><a href="#"><i class="bi hover-target bi-telegram"></i></a></div>
                    </div>
                </div>
                <div class="share">
                    <div class="trigger share-btn"><a href="#"><i class="bi hover-target bi-plus-lg"></i> Share</a></div>
                </div>
                <div class="like">
                    <div class="trigger like-btn"><a href="#"><i class="bi hover-target bi-heart-fill"></i> Like</a></div>
                </div>
            </div>
        </div>
    );
}


export default TopLinks;