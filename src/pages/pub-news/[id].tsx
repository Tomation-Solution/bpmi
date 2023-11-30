import { Herofn, Layout } from "@/components"
import { publicationAndNews } from "@/components/About"
import Link from "next/link"
import { useRouter } from "next/router"



const PubNews = ()=>{
    const route = useRouter()
    const {id} = route.query
    const data = publicationAndNews.filter((d)=>d.id ==id)[0]
    console.log({id})

    return(
        <Layout>
            <Herofn
            img={"allinsuit"}
            title={
              "Promoting the practice of Business Process Management in Nigeria"
            }
          />

            {
                data?
          <div className="p-4 md:p-8">
            <h1 className="text-center text-4xl	">{data.title}</h1>
            <br />
            <img src={data.img} alt="" className="mx-auto block w-[400px]" />

            {
                data.content.map((d,index)=>(
                    <p key={index}>{d}</p>
                ))
            }
            <br />
            <div className="text-center ">
            <Link href={data.dowloadFile} target="_blank"><strong className="text-blue decoration-dashed">Click Dowload this file to read</strong></Link>
            </div>
          </div>
            :''
            }


        </Layout>
    )
}

export default PubNews