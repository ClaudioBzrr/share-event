import { Form } from "./pages/Form"
import { PreviewAndShare } from "./pages/PreviewAndShare"

interface RoutesProps{
    path:string,
    element:JSX.Element

}
export const routes:RoutesProps[]=[
    {
        path:'/',
        element:<Form/>
    },
    {
        path:'/share',
        element:<PreviewAndShare/>
    }
]