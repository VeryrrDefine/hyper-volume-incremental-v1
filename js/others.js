function isValidBase64EncodedJson(enc_json){
    try {
        return JSON.parse(atob(enc_json))
    }catch {
        return false
    }
}