import { useWeb3 } from "@3rdweb/hooks";
import { ToastContainer, toast } from 'react-toastify';
import Router from 'next/router';
import { userInsert } from '../service/UserService';

const ConnectionContainer = () => {
    var data = useWeb3();
    const clickHundler = async () => {
        if (typeof window !== "undefined") {
            if (typeof window.ethereum !== 'undefined') {
                if (data.address === undefined) {
                    localStorage.setItem('isConnected', 'yes')
                    data.connectWallet('injected');
                } else {
                    Router.push('/User');
                }
            } else {
                toast.info('you need to install metamask chrome extention.', { position: "top-right", autoClose: 2000 });
            }
        }
    }

    if (typeof window !== "undefined") {
        if (localStorage.getItem('isConnected') !== "no") {
            if (data.address !== undefined) {
                let userData = {
                    address: data.address,
                    chainId: data.chainId
                };
                let res = userInsert(userData);
                Router.push('/User');
            }
        }
    }

    return (
        <section className="fxt-template-animation fxt-template-layout4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-12 fxt-bg-wrap">
                        <div className="fxt-bg-img">
                            <div className="fxt-header">
                                <div className="fxt-transformY-50">
                                    <h1>Welcome </h1>
                                </div>
                                <div className="fxt-transformY-50">
                                    <p className="text-white">Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the dummy consectetur elit the Lorem Ipsum genera.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 fxt-bg-color">
                        <div className="fxt-content">
                            <div className="fxt-form">
                                <div className="form-group">
                                    <h1>Meta Wallet</h1>
                                    <p>Click here To Connect With Your Wallet</p>
                                    <button type="button" className="fxt-btn-fill" onClick={() => clickHundler()}>{data.address ? 'Go To Profile' : 'Connect With Wallet'}</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>

    )
}

export default ConnectionContainer