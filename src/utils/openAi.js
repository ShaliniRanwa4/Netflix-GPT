import OpenAI from "openai";
import {OPEN_API_KEY} from "./constant";
// import {BASE_URL} from "./constant"

const openai = new OpenAI({
  // OPEN_API_KEY,
apiKey: OPEN_API_KEY,
dangerouslyAllowBrowser: true

});
export default openai;