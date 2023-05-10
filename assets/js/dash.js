customElements.define('element-dynamic',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document
        .getElementById('element-template')
        .content;
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);

var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'keyTpq0ckgmWts9xZ' }).base('appIHo1uhILK9J16z');

var deleteProject = function(record) {
    record.destroy(function(err) {
        if (err) {
            console.log('Error destroying ', recordId, err);
        } else {
            console.log('Destroyed ', record.getId());
            $('element-dynamic[data-record-id="'+record.getId()+'"]').remove();
        }
    });
};

var loadProjects = function() {
    $('#Projects').empty();

    window.localStorage.setItem('id_from_organizations', '1'); //need to be changed and setted after login

    base('Projects').select({
        filterByFormula: `ID_from_Organizations = "${window.localStorage.getItem('id_from_organizations')}"`,
        sort: [
            {field: 'Name', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            var $ProjectsInfo = $('<element-dynamic class="col-sm-6 col-xxl-4" style="display:inline-block">');

            if (record.get('Name')!==undefined) {
                $ProjectsInfo.append($('<div slot="element-name">').text(record.get('Name')));
            } else {
                $ProjectsInfo.append($('<div slot="element-name">').text('No name'));
            }

            if (record.get('Completion %')>=0) {
                $ProjectsInfo.append($('<div slot="element-completion">').text(record.get('Completion %')));
            } else {
                $ProjectsInfo.append($('<div slot="element-completion">').text('Objectives not defined yet'));
            }

            if (record.get('Status')!==undefined) {
                $ProjectsInfo.append($('<div slot="element-status">').text(record.get('Status')));
            } else {
                $ProjectsInfo.append($('<div slot="element-status">').text('Status not defined yet'));
            }

            if (record.get('Description')!==undefined) {
                $ProjectsInfo.append($('<div slot="element-description">').text(record.get('Description')));
            } else {
                $ProjectsInfo.append($('<div slot="element-description">').text('No description'));
            }

            if (record.get('Budget')<1) {
                $ProjectsInfo.append($('<div slot="element-budget">').text('No budget'));
            } else {
                $ProjectsInfo.append($('<div slot="element-budget">').text('$'+record.get('Budget')));
            }

            var action_delete = $('<a class="btn btn-sm btn-light flex-shrink-0 me-2" slot="element-action-delete">').text('Delete').click(function() {
                deleteProject(record);
            });
            $ProjectsInfo.append(action_delete)
            $ProjectsInfo.attr('data-record-id', record.getId());

            var details = $('<a class="btn btn-sm btn-light flex-shrink-0 me-2" slot="element-action-details">').text('Details').click(function() {
                window.localStorage.setItem('project_id', record.getId());
                window.localStorage.setItem('id_from_project', record.get('ID'));
                window.open('/organization/project/', "_self")
            });
            $ProjectsInfo.append(details)
            $('#Projects').append($ProjectsInfo);
        });

        fetchNextPage();
    }, function done(error) {
        console.log(error);
    });
};

$('#create').click(function(){
    base('Projects').create({
        "Name": document.querySelector('[name="settings_name"]').value,
        "Description": document.querySelector('[name="settings_description"]').value,
        "Spent": 0,
        "Budget": +document.querySelector('[name="budget_setup"]').value.substring(1),
        "Status": "Todo"
    }, function(err, record) {
        if (err) { console.log(err); return; }
        loadProjects();
    });
});

loadProjects();
