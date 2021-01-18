import axios from "axios";
import {YoutubeThumb} from "../utils/videoThumb";

export const isVideoDown  = async (video) => {
    var thumb = YoutubeThumb.thumb(video.uri, 'small');
    try {
        await axios.get(thumb, {responseType: "arraybuffer"});
        return true;
    }catch(err){
        return false;
    }
}