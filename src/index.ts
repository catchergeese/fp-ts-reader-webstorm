import { example }  from "./reader";
import { ctx } from "./ctx";

const usage = () => {
    // fp-ts bug
    example(1);

    // Just TypeScript bug
    ctx("test");
}
