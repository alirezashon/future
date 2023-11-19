import type { InferGetServerSidePropsType, GetServerSideProps } from "next"
import { useState, useEffect } from "react"
import Image from "next/image"
import styles from "./index.module.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Add, Remove } from "../../Components/Basket/index"
interface Post {
  _id: string
  title: string
  src: string
  price: number
  category: string
  quantity: number
  description: string
}
interface Basket {
  _id: string
  title: string
  src: string
  price: number
  category: string
  quantity: number
  description: string
  basketDetail: string
}

interface Posts {
  posts: Post[]
}

const PostBox = () => {
  const posts = [
    {
      _id: "44ads",
      title: "EBiramoza",
      src: "/images/alireza.jpg",
      price: 7777777,
      category: "P&O*S^T$I%T#E^M$",
      quantity: 22,
      description:
        "this post just created for happy freedome to al.akbarporJojegan",
    },
    {
      _id: "7sdfgt",
      title: "EBiramoza",
      src: "/images/alireza.jpg",
      price: 7777777,
      category: "P&O*S^T$I%T#E^M$",
      quantity: 22,
      description:
        "this post just created for happy freedome to al.akbarporJojegan",
    },
    {
      _id: "44ads",
      title: "EBiramoza",
      src: "/images/alireza.jpg",
      price: 7777777,
      category: "P&O*S^T$I%T#E^M$",
      quantity: 22,
      description:
        "this post just created for happy freedome to al.akbarporJojegan",
    },
    {
      _id: "7sdfgt",
      title: "EBiramoza",
      src: "/images/alireza.jpg",
      price: 7777777,
      category: "P&O*S^T$I%T#E^M$",
      quantity: 22,
      description:
        "this post just created for happy freedome to al.akbarporJojegan",
    },
    {
      _id: "7sdfgt",
      title: "EBiramoza zar varaghi talamala balamala",
      src: "/images/alireza.jpg",
      price: 7777777,
      category: "P&O*S^T$I%T#E^M$",
      quantity: 22,
      description:
        "this post just created for happy freedome to al.akbarporJojegan",
    },
  ]
  const [postStates, setPostStates] = useState<Post[]>(posts)
  const [basketPost, setBasketPost] = useState<Post[]>([])

  useEffect(() => {
    const checkBasket = () => {
      const basketestor: string[] = JSON.parse(
        localStorage.getItem("#B!@%$&K&E^T*O(s&") || "[]"
      )
      const ali = []
      for (let basket of basketestor) {
        const item = postStates.filter(
          (item) => item._id === basket.split("*2%2&7(7)5%5!1@2")[0]
        )
        ali.push(item)
      }
      // const basketIn = basketestor.map((store)=>{
      //   const postData = postStates.filter((item)=> item._id === store.split("*2%2&7(7)5%5!1@2")[0])

      // })
      // console.log(basketIn)
      // setBasketPost(ali)
      console.log(ali)
      //   if (basketestor) {
      //     const posts = postStates.filter(
      //       (item) =>
      //  basketestor.some((id) => id.startsWith(item._id))
      //     )
      //     const basketin = postStates.filter((item) =>
      //       basketestor.some((id) => id.startsWith(item._id))
      //     )
      //     setPostStates(posts)
      //     setBasketPost(basketin)
      //   }
    }
    checkBasket()
  }, [postStates])

  return (
    <div className={styles.postsBox}>
      <div className={styles.innerPostsBox}>
        {posts.map((obj, index: number) => (
          <div className={styles.postBox} key={obj._id}>
            <h6 className={styles.title}>{obj.title}</h6>
            <div className={styles.innerPostBox}>
              <div className={styles.imageBox}>
                <Image
                  src={obj.src}
                  alt={obj.description}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>

              {
                // basketPost?.length > 0 ?
                // <div className={styles.priceBasketBox}>
                //   <div className={styles.innerPriceBasketBox}>
                //     <div className={styles.priceBasket}>
                //       <p className={styles.productBasketPrice}>{obj.price}</p>
                //       <div className={styles.productBasketicon}>
                //         <button onClick={() => Remove(obj._id)}>-</button>
                //         <button onClick={() => Add(obj._id)}>+</button>
                //         <span>2</span>
                //       </div>
                //     </div>
                //   </div>
                // </div>
              }
              {/* ) : ( */}
              <div className={styles.priceBasketBox}>
                <div className={styles.innerPriceBasketBox}>
                  <div className={styles.priceBasket}>
                    <div className={styles.icon} onClick={() => Add(obj._id)}>
                      <AiOutlineShoppingCart
                        size={"4vh"}
                        color={"rgb(255,255,255)"}
                      />
                <p className={styles.price}>{obj.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostBox
