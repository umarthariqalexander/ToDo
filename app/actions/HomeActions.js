const reminderList = [{
  reminderTitle: 'Meeting 1', reminderTime: '05:00PM', reminderDate: '11/12/2011', snoozeType: 'Never',
}, {
  reminderTitle: 'Meeting 2', reminderTime: '07:00PM', reminderDate: '11/11/2011', snoozeType: 'EveryDay',
}, {
  reminderTitle: 'Meeting 3', reminderTime: '07:00PM', reminderDate: '11/11/2011', snoozeType: 'EveryDay',
}, {
  reminderTitle: 'Meeting 4', reminderTime: '07:00PM', reminderDate: '11/11/2011', snoozeType: 'EveryDay',
}, {
  reminderTitle: 'Meeting 5', reminderTime: '07:00PM', reminderDate: '11/11/2011', snoozeType: 'EveryDay',
}, {
  reminderTitle: 'Meeting 6', reminderTime: '07:00PM', reminderDate: '11/11/2011', snoozeType: 'EveryDay',
}];

export const GET_REMINDERS_LIST = 'GET_REMINDERS_LIST';


export const getRemindersList = () => ({
  type: GET_REMINDERS_LIST,
  reminderList,
});
