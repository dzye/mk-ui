import { makeInstaller } from "@mk-ui/utils";
import components from "./components";
import '@mk-ui/theme/index.css';
const installer = makeInstaller(components);
export * from '@mk-ui/components'
export default installer;
