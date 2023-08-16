export const formatDocumentUrl = (documents) => {
    return documents
       .filter((document) => document.error.length === 0)
       .map((document) => {
          return {
             name: document.file.givenName,
             url: document.url,
          };
       });
 };
 
 // errors version of formatDocumentUrl
 export const formatDocumentUrl0 = (documents) => {
    return documents
       .filter((document) => document?.errors?.length === 0)
       .map((document) => {
          return {
             name: document.file.givenName,
             url: document.url,
          };
       });
 };
 
 export const formatDocumentUrl1 = (documents) => {
    return documents
       .filter((document) => document.error.length === 0)
       .map((document) => {
          return {
             name: document.file.givenName,
             url: document.url,
          };
       });
 };
 
 export const formatDocumentsWithNameAndUrl = (documents) => {
    return documents
       .filter((document) => document.errors.length === 0)
       .map((document) => {
          return {
             name: document.file.givenName
                ? document.file.givenName
                : document.file.name,
             url: document.url,
          };
       });
 };
 
 export const formatYoutubeVideoUrl = (url) => {
    // format youtube video url
    return (
       url &&
       url
          .replace('watch?v=', 'embed/')
          .replace('/shorts/', '/embed/')
          .split('?')[0]
          .split('&')[0]
    );
 };
 
 // counting due date from today
 export const countDueDate = (date, days) => {
    const copy = new Date(Number(date));
    copy.setDate(date.getDate() + days);
    return copy;
 };
 
 export const arraysAreEqual = (a1, a2) => {
    if (a1.length !== a2.length) {
       return false;
    }
    for (let i = 0; i < a1.length; i++) {
       if (Array.isArray(a1[i]) && Array.isArray(a2[i])) {
          if (!arraysAreEqual(a1[i], a2[i])) {
             return false;
          }
       } else if (a1[i] !== a2[i]) {
          return false;
       }
    }
    return true;
 };
 
 export const goToWhatsapp = () => {
    window.location.href =
       'https://api.whatsapp.com/send?phone=+918976588792&text=Hello%20there%21%20I%20would%20like%20to%20know%20more%20about%20SOLRUF%20or%20would%20like%20to%20purchase%20a%20solar%20product.%20Can%20you%20help%20us%20with%20this%3F';
 };
 
 export function createFormDataFromObject(dataObject) {
    const formData = new FormData();
 
    for (const key in dataObject) {
       if (dataObject.hasOwnProperty(key)) {
          formData.append(key, dataObject[key]);
       }
    }
 
    return formData;
 }
 
 export const getTimeStamp = () => {
    const timestamp = Date.now();
    return new Date(timestamp).toLocaleString();
 };
 
 // get current time in this format 2023-06-15 11:11
 export function getCurrentTime() {
    const currentDate = new Date();
 
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
 
    return `${year}-${month}-${day} ${hours}:${minutes}`;
 }
 
 export function convertToParagraph(text) {
    if (!text || text.length < 1) return;
    const lines = text.split('\n');
    let paragraph = '';
 
    for (let line of lines) {
       line = line.trim(); // Remove leading/trailing whitespace
 
       if (line) {
          paragraph += `${line}<br><br>`; // Add line with <br> tag
       }
    }
 
    return paragraph;
 }
 