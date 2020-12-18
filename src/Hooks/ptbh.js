import React, { useState } from 'react';
import InputData from './components/ptbh/input';
import ButtonComponent from './components/ptbh/button';
import Result from './components/ptbh/result';

const GiaiPTBH = () => {
    let [hsa, sethsa] = useState('');
    let [hsb, sethsb] = useState('');
    let [hsc, sethsc] = useState('');
    let [result, setResult] = useState(null);

    const changeInput = (event) => {
        let nameInput = event.target.name;
        let val = event.target.value;
        if (nameInput === 'hsa') {
            sethsa(val);
        } else if (nameInput === 'hsb') {
            sethsb(val);
        } else if (nameInput === 'hsc') {
            sethsc(val);
        }
    }

    const giaiPT = () => {
        let a = hsa;
        let b = hsb;
        let c = hsc;
        let chka = null;
        let chkb = null;
        let chkc = null;
        if (!isNaN(a) && a.length > 0) {
            chka = true;
            a = parseFloat(a);
        } else {
            chka = false;
        }

        if (!isNaN(b) && b.length > 0) {
            chkb = true;
            b = parseFloat(b);
        } else {
            chkb = false;
        }

        if (!isNaN(c) && c.length > 0) {
            chkc = true;
            c = parseFloat(c);
        } else {
            chkc = false;
        }

        if (chka && chkb && chkc) {
            //thuc su di tim nghiemghi
            let delta = (b * b) - (4 * a * c);
            if (delta < 0) {
                setResult(`phuong trinh vo nghiem`)
            } else if (delta == 0) {
                setResult(`phuong trinh co nghiem kem: ${-b / 2 * a} `);
            } else {
                let x1 = (-b + Math.sqrt(delta)) / (2 * a);
                let x2 = (-b - Math.sqrt(delta)) / (2 * a);
                setResult(`phuong trinh co 2 nghiem phan biet x1=${x1} x2=${x2}`);
            }
        } else {
            setResult(`vui long nhap so`);
        }
    }
    return (
        <>
            <h2>Giai phuong trinh bac hai</h2>
            <p>nhap he so a</p>
            <InputData change={changeInput} type="text" name="hsa" />
            <br />
            <p>nhap he so b</p>
            <InputData change={changeInput} type="text" name="hsb" />
            <br />
            <p>nhap he so c</p>
            <InputData change={changeInput} type="text" name="hsc" />
            <br />
            <ButtonComponent click={giaiPT} type="button">GIAI PT</ButtonComponent>
            <Result result={result} />
        </>
    );
}
export default GiaiPTBH;