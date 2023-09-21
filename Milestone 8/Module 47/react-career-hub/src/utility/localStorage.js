const getStoredJobApplication = () => {
    const getStoredJobApplication = localStorage.getItem('saved-application');
    if(getStoredJobApplication){
        return JSON.parse(getStoredJobApplication);
    }else{
        return [];
    }
}

const savedJobApplication = id => {
    const StoredJobApplication = getStoredJobApplication();
    const exist = StoredJobApplication.find(jobID => jobID === id);
    if(!exist){
        StoredJobApplication.push(id);
        localStorage.setItem('saved-application', JSON.stringify(StoredJobApplication));
    }
}

export {getStoredJobApplication, savedJobApplication};