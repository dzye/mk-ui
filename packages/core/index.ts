import { makeInstaller } from "@mk-ui/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import '@mk-ui/theme/index.css';
library.add(fas)
const installer = makeInstaller(components);
export * from '@mk-ui/components'
export default installer;
