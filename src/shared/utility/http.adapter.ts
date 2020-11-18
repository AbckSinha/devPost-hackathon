export class HttpAdapter {

    static baseAdapter(res, adapterFn): any {
        if (res.status === 200) {
            try {
                // const jsonRes = res.json();
                return adapterFn ? adapterFn.call(undefined, res) : res;
            } catch (e) {
                return res;
            }
        }
    }
}
