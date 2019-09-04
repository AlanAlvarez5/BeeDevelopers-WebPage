import React,{Component} from 'react';
import './talleres.css';

export default class Talleres extends Component {

    render() {

        return (
            <div className="talleres">
                <h2>Semana de Open Day</h2>
                <div className="talleres-formularios">

                    <div className="first-row">

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdGE56iTusnU4I2l8tjyrynOgxQtvPL4GC_tfW96miykpbTSA/viewform?embedded=true" width="480" height="1319" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc8QQ9QY9iz3x9k77Wj_1vf3_HIOxdjPXRZ_Q5ZTnwAP2CRzQ/viewform?embedded=true" width="480" height="1319" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    </div>
                    <div className="second-row">

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScxWeJQpAJkabCRvwdImg597hNifC1PBoTTa2eY4nBbSufitw/viewform?embedded=true" width="480" height="1319" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSewdnrb8vz2D5myPMo44zNUohpaXbfrXO80vc-ajhruSsL-BA/viewform?embedded=true" width="480" height="1319" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    </div>
                    
                </div>
            </div>
        );
    }
}