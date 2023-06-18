/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
// import { faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons'
// import { faDownload } from '@fortawesome/free-solid-svg-icons'
// import { faLink } from '@fortawesome/free-solid-svg-icons'
// import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


export const initFontawesome = (app) => {
    /* add icons to the library */
    // library.add(faArrowRight);
    // library.add(faArrowLeft);
    // library.add(faCircleUser);
    // library.add(faDownload);
    // library.add(faLink);
    // library.add(faPersonThroughWindow);
    // library.add(faCloudArrowUp);
    // library.add(faSpinner);
	// library.add(faTrash);
    library.add(fas);
    library.add(far);
	library.add(fab);

    app.component('font-awesome-icon', FontAwesomeIcon);
}