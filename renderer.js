const fs = require('fs');

function mergeValues(values, content) {
	//cycle over keys
	for (let key in values) {
		//replace all {{key}} with the value from the values object
		content = content.replace(`{{${key}}}`, values[key]);
	}
		//return merged content
		return content;
}

function view(templateName, values, response) {
	//read from template files
	let fileContents = fs.readFileSync(`${templateName}.html`, {encoding: 'utf8'});
	//insert values into content
	fileContents = mergeValues(values, fileContents);
	//write out the content into response
	response.write(fileContents);
}

module.exports.view = view;