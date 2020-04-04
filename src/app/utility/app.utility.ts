import { DatePipe } from '@angular/common';
export class AppUtility {


    public static isEmptyString(str): boolean {
        return (!str || 0 === str.length);
    }

    public static setDateTimeStamp(dateId) {
        if (dateId != null && dateId != undefined) {
            let date = new Date(dateId).getTime();
            return date;
        } else return null;

    }

    public static isEmptyObject(object): boolean {
        for (var key in object) {
            if (object.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    public static prepareInnerObjects(names, innerValues) {
        let obj1: any = {}
        for (var i = 0; i < names.length; i++) {
            obj1[names[i]] = innerValues[i];
        }

        return obj1
    }
    public static getFieldValue(a) {


        for (var i = 0; i < a.length; i++) {
            var obj = a[i];
            for (let prop of Object.keys(obj)) {
                if (obj[prop] instanceof Object) {
                    for (let inProp of Object.keys(obj[prop])) {

                        if (obj[prop] != null && obj[prop] != null)
                            obj[inProp] = obj[prop][inProp]
                    }
                }
            }

        }
        return a;


    }

    public static extractInnerObjectsWithNeed(a, innerObjects1?: any, innerObjects2?: any,
        innerField?: any) {

        for (var i = 0; i < a.length; i++) {
            var obj = a[i];
            for (let prop of Object.keys(obj)) {
                if (obj[prop] instanceof Object) {
                    if (innerObjects1 != null && innerObjects1 != undefined && innerObjects1.length > 0 && innerObjects1.includes(prop)) {

                        for (let inProp of Object.keys(obj[prop])) {
                            if (innerField != null && innerField != undefined && innerField.length > 0) {

                                if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                    obj[inProp] = obj[prop][inProp]
                            } else {
                                if (obj[prop] != null && obj[prop] != null)
                                    obj[inProp] = obj[prop][inProp]

                            }

                        }
                    } else
                        if (innerObjects2 != null && innerObjects2 != undefined && innerObjects2.length > 0 && innerObjects2.includes(prop)) {

                            for (let inProp of Object.keys(obj[prop])) {
                                if (innerField != null && innerField != undefined && innerField.length > 0) {

                                    if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                        obj[prop] = obj[prop][inProp]
                                } else {
                                    if (obj[prop] != null && obj[prop] != null)
                                        obj[prop] = obj[prop][inProp]
                                }

                            }
                        }

                        else {
                            for (let inProp of Object.keys(obj[prop])) {
                                if (innerField != null && innerField != undefined && innerField.length > 0) {

                                    if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                        obj[inProp] = obj[prop][inProp]
                                } else {
                                    if (obj[prop] != null && obj[prop] != null)
                                        obj[inProp] = obj[prop][inProp]
                                }

                            }

                        }
                }
            }

        }
        return a;
    }



    public static extractInnerObjectsWithNeedForObject(a, innerObjects1?: any, innerObjects2?: any,
        innerField?: any) {

        var obj = a;
        for (let prop of Object.keys(obj)) {
            if (obj[prop] instanceof Object) {
                if (innerObjects1 != null && innerObjects1 != undefined && innerObjects1.length > 0 && innerObjects1.includes(prop)) {

                    for (let inProp of Object.keys(obj[prop])) {
                        if (innerField != null && innerField != undefined && innerField.length > 0) {

                            if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                obj[inProp] = obj[prop][inProp]
                        } else {
                            if (obj[prop] != null && obj[prop] != null)
                                obj[inProp] = obj[prop][inProp]
                        }

                    }
                } else
                    if (innerObjects2 != null && innerObjects2 != undefined && innerObjects2.length > 0 && innerObjects2.includes(prop)) {

                        for (let inProp of Object.keys(obj[prop])) {
                            if (innerField != null && innerField != undefined && innerField.length > 0) {

                                if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                    obj[prop] = obj[prop][inProp]
                            } else {
                                if (obj[prop] != null && obj[prop] != null)
                                    obj[prop] = obj[prop][inProp]
                            }

                        }
                    }

                    else {
                        for (let inProp of Object.keys(obj[prop])) {
                            if (innerField != null && innerField != undefined && innerField.length > 0) {

                                if (obj[prop] != null && obj[prop] != null && innerField.includes(inProp))
                                    obj[inProp] = obj[prop][inProp]
                            } else {
                                if (obj[prop] != null && obj[prop] != null)
                                    obj[inProp] = obj[prop][inProp]
                            }

                        }

                    }
            }
        }


        return a;
    }
    public static getFieldValueObject(a) {



        var obj = a;
        for (let prop of Object.keys(obj)) {
            if (obj[prop] instanceof Object) {
                for (let inProp of Object.keys(obj[prop])) {

                    if (obj[prop] != null && obj[prop] != null)
                        obj[inProp] = obj[prop][inProp]
                }
            }
        }


        return a;
    }


    public static removeNullUnfefined(a) {
        var obj = a;
        for (let prop of Object.keys(obj)) {
            if (obj[prop] instanceof Object) {
                for (let inProp of Object.keys(obj[prop])) {
                    if (obj[prop] != null && obj[prop] != null) {
                        if (obj[prop][inProp] == null || obj[prop][inProp] === undefined || obj[prop][inProp] == '' || obj[prop][inProp] == NaN)
                            if (obj[prop][inProp] === 0) { } else {
                                delete obj[prop][inProp]
                            }
                    }
                }
                if (Object.keys(obj[prop]).length === 0) { delete obj[prop] }
            } else {
                if (obj[prop] == null || obj[prop] === undefined || obj[prop] == '' || obj[prop] == NaN)
                    if (obj[prop] === 0) { } else { delete obj[prop]; }

            }
        }
        return a;
    }

    public static preparePageable(pageable) {

        let p = AppUtility.removeNullUnfefined(pageable);
        let url = "?"
        for (let prop of Object.keys(p)) {
            url += prop + "=" + p[prop] + "&";
        }

        return url.slice(0, -1);;
    }


    public static setOrder(dir) {

        if (dir == 1) { return ',asc' }
        else if (dir == -1) { return ',desc' }
    }

    public static checkNullUnfefined(obj) {
        if (obj == null || obj == undefined) {
            return true;
        }
        else { return false; }
    }
    public static checkEmptyObject(obj) {
        if (obj == null || obj == undefined) { return true }
        this.removeNullUnfefined(obj);
        if (Object.keys(obj).length === 0) {

            return true;
        }
        else { return false; }
    }
    public static focusOnLoad(firstFieldName) {
        if (firstFieldName) {
            setTimeout(function () {
                var input = document.getElementById(firstFieldName);
                input.focus();
            }, 500)
        }

    }
    public static millisecondsToMinutes(millis) {
        return (millis / 60000)
    }

     public static  cloneObject(objectpassed) :any {
        if (objectpassed === null || typeof objectpassed !== 'object') {
            return objectpassed;
         }
       // give temporary-storage the original obj's constructor
       var temporary_storage = objectpassed.constructor(); 
         for (var key in objectpassed) {
            temporary_storage[key] = AppUtility.cloneObject(objectpassed[key]);
         }
         return temporary_storage;
    }

}