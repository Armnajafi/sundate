class Sundate {
    private date: Date | null;

    constructor (date_ms:number | undefined = undefined) {
        if(typeof(date_ms) != "undefined")
           this.date = new Date(date_ms ? date_ms : 0);
        else
           this.date = null;
    }

    public gregorian_to_shamsi(gy:number, gm:number, gd:number) {
        var g_d_m, jy, jm, jd, gy2, days;
        g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        gy2 = (gm > 2) ? (gy + 1) : gy;
        days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
        jy = -1595 + (33 * ~~(days / 12053));
        days %= 12053;
        jy += 4 * ~~(days / 1461);
        days %= 1461;
        if (days > 365) {
        jy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
        }
        if (days < 186) {
        jm = 1 + ~~(days / 31);
        jd = 1 + (days % 31);
        } else {
        jm = 7 + ~~((days - 186) / 30);
        jd = 1 + ((days - 186) % 30);
        }
        return [jy, jm, jd];
    }
  
    public shamsi_to_gregorian(jy:number, jm:number, jd:number) {
        var sal_a, gy, gm, gd, days;
        jy += 1595;
        days = -355668 + (365 * jy) + (~~(jy / 33) * 8) + ~~(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy = 400 * ~~(days / 146097);
        days %= 146097;
        if (days > 36524) {
        gy += 100 * ~~(--days / 36524);
        days %= 36524;
        if (days >= 365) days++;
        }
        gy += 4 * ~~(days / 1461);
        days %= 1461;
        if (days > 365) {
        gy += ~~((days - 1) / 365);
        days = (days - 1) % 365;
        }
        gd = days + 1;
        sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
        return [gy, gm, gd];
    }

    public now(shamsi: boolean = true){
        const dateNow:Date =new Date()
        let dateNow_year = dateNow.getFullYear()
        let dateNow_month = dateNow.getMonth()+1
        let dateNow_day = dateNow.getDate()
        let dateArray = [dateNow_year , dateNow_month , dateNow_day]
        if(shamsi){
            dateArray = this.gregorian_to_shamsi(dateNow_year , dateNow_month , dateNow_day)
            return dateArray
        } else {
            return dateArray
        }
    }

    public show(shamsi: boolean = true){
        if(this.date != null){
            const dateNow:Date =new Date(this.date ? this.date : "")
            let dateNow_year = dateNow.getFullYear()
            let dateNow_month = dateNow.getMonth()+1
            let dateNow_day = dateNow.getDate()
            let dateArray = [dateNow_year , dateNow_month , dateNow_day]
            if(shamsi){
                dateArray = this.gregorian_to_shamsi(dateNow_year , dateNow_month , dateNow_day)
                return dateArray
            } else {
                return dateArray
            }
        } else {
            throw "To use show(), you must first give a numeric date object"
        }
    }
}
  
export = Sundate