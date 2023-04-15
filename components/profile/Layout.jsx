import Link from "next/link"
export default function Layout() {
    return (
           <section className="profile_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Link href="/profile">
                                    <p >اطلاعات کاربر</p>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/addresses">
                                    <p href="./addresses.html">آدرس ها</p>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/orders">
                                    <p href="./orders.html">سفارشات</p>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <Link href="/profile/transactions">
                                    <p href="./transactions.html">تراکنش ها</p>
                                </Link>
                            </li>
                            <li className="list-group-item">
                                <p href="#">خروج</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        {/* {children} */}
                    </div>
                </div>
            </div>
        </section>
    )
}