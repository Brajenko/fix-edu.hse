export default function removeForceDownload() {
    document.querySelectorAll('.fileuploadsubmission').forEach(
        function (element) {
            linkElement = element.querySelector('a');
            linkElement.href = linkElement.href.endsWith('?forcedownload=1')
            ? linkElement.href.replace('?forcedownload=1', '')
            : linkElement.href;
        }
    )
}