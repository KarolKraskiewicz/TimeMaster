/*******************************************************************************
 * Copyright © 2017 Hoffmann-La Roche
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

const hangoutsMeetPage = {
    EMAIL_SPAN: 'div[title]',
    PROGRESS_BAR_CLASS: 'tm-progress-bar-left',
    URL_PREFIX: 'https://meet.google.com',

    isOnCompatibleHangoutsPage: () => window.location.href.startsWith(hangoutsMeetPage.URL_PREFIX),
    isInitialized: () => document.querySelector(hangoutsMeetPage.EMAIL_SPAN) != undefined,
    getEmail: () => document.querySelector(hangoutsMeetPage.EMAIL_SPAN).innerHTML,
    getProgressBarClass: () => hangoutsMeetPage.PROGRESS_BAR_CLASS,
    isTimeStripOnRight: () => false
};

export default hangoutsMeetPage;