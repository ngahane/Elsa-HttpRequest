var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

class XHR {

    constructor(initUrl) {
        this.url = initUrl
    }

    get(route, params){
        return new Promise((success, error)=>{
            let finalURl = this.url + route
            if(params != null)
                finalURl = finalURl + params
            let xhr  = new  XMLHttpRequest()
            xhr.open('GET', finalURl, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send()    
        })
    }

    post_with_wwwFormUrlEncoded(route, params){
        return new Promise((success, error)=>{
            let xhr  = new XMLHttpRequest()
            let finalURl = this.url + route
            xhr.open('POST', finalURl, true)
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded; charset=utf-8')
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(params)    
        })
    }

    post_with_json(route, json){
        return new Promise((success, error)=>{
            let xhr  = new XMLHttpRequest()
            let finalURl = this.url + route
            xhr.open('POST', finalURl, true)
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(JSON.stringify(json))    
        })
    }

    post_with_formData(route, formData){
        return new Promise((success, error)=>{
            let xhr  = new XMLHttpRequest()
            let finalURl = this.url + route
            xhr.open('POST', finalURl, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(formData)    
        })
    }


    put_with_wwwFormUrlEncoded(route, params, index){
        return new Promise((success, error)=>{
            let finalURl = this.url + route
            if(index != null)
                finalURl = finalURl + index
            let xhr  = new XMLHttpRequest()
            xhr.open('PUT', finalURl, true)
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded; charset=utf-8')
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(params)    
        })
    }


    put_with_json(route, json, index){
        return new Promise((success, error)=>{
            let finalURl = this.url + route
            if(index != null)
                finalURl = finalURl + index
            let xhr  = new XMLHttpRequest()
            xhr.open('PUT', finalURl, true)
            xhr.setRequestHeader('Content-type','application/json; charset=utf-8')
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(JSON.stringify(json))    
        })
    }

    put_with_formData(route, formData, index){
        return new Promise((success, error)=>{
            let finalURl = this.url + route
            if(index != null)
                finalURl = finalURl + index
            let xhr  = new XMLHttpRequest()
            xhr.open('POST', finalURl, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send(formData)    
        })
    }

    delete(route, params){
        return new Promise((success, error)=>{
            let finalURl = this.url + route
            if(params != null)
                finalURl = finalURl + params
            let xhr  = new XMLHttpRequest()
            xhr.open('DELETE', finalURl, true)
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200 || xhr.status == 201)
                        success(JSON.parse(xhr.responseText))
                    else{
                        let err = {
                            status: xhr.status,
                            data : JSON.parse(xhr.responseText)
                        }
                        error(err)
                    }
                }
            }
            xhr.send()    
        })
    }

}
