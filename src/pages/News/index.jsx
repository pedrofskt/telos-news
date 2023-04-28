import Banner from "../../component/BannerNewsPage/BannerNewsPage";
import { Comment } from "../../component/Comment";
import HeaderNewsPage from "../../component/HeaderNewsPage";
import Noticia from "../../component/Noticia";
import RelatedArticles from "../../component/RelatedArticles";






export function News () {
    return(
        <div>
            <HeaderNewsPage />
            <Banner />
            <div>
                    <Noticia />
                    <RelatedArticles />
                    <Comment />
            </div>
        </div>
        
    )
}