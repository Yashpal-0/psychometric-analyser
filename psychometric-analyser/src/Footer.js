import React, { PureComponent } from 'react'


export default class Footer extends PureComponent {
    render() {
        return (
            <div>
                <footer className="bg-dark text-center text-lg-start mt-5 pt-2">
                    <div className="text-center text-light p-3">
                        © 2023 Copyright:
                        <a className="text-light" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}
