import {
  AskIfOperators, DispenseSubjectId, Workflows, patientStatuses, patientStatusesKeys,
} from './ReusableStrings';

export const GenderOptions = [
  { key: 'MALE', value: 'Male' },
  { key: 'FEMALE', value: 'Female' },
];

// DEPRECATED [SCSS-517] Using moment js timezone options
// ref TIMEZONE_OPTIONS in 'script/Utils'
// export const TIMEZONE_OPTIONS = [
//   { key: 'US/Alaska', value: 'US/Alaska' },
//   { key: 'US/Aleutian', value: 'US/Aleutian' },
//   { key: 'US/Arizona', value: 'US/Arizona' },
//   { key: 'US/Central', value: 'US/Central' },
//   { key: 'US/East-Indiana', value: 'US/East-Indiana' },
//   { key: 'US/Eastern', value: 'US/Eastern' },
//   { key: 'US/Hawaii', value: 'US/Hawaii' },
//   { key: 'US/Indiana-Starke', value: 'US/Indiana-Starke' },
//   { key: 'US/Michigan', value: 'US/Michigan' },
//   { key: 'US/Mountain', value: 'US/Mountain' },
//   { key: 'US/Pacific', value: 'US/Pacific' },
//   { key: 'US/Samoa', value: 'US/Samoa' },
//   { key: 'Europe/Paris', value: 'Europe/Paris' },
//   { key: 'Europe/Rome', value: 'Europe/Rome' },
// ];

export const ORDER_OPTIONS = [
  { key: 'accountId ASC', value: 'NORA ID Ascending' },
  { key: 'accountId DESC', value: 'NORA ID Descending' },
  { key: 'email ASC', value: 'Email Ascending' },
  { key: 'email DESC', value: 'Email Descending' },
  { key: 'firstName ASC', value: 'First Name Ascending' },
  { key: 'firstName DESC', value: 'First Name Descending' },
  { key: 'lastName ASC', value: 'Last Name Ascending' },
  { key: 'lastName DESC', value: 'Last Name Descending' },
  { key: 'created ASC', value: 'Date Created Ascending' },
  { key: 'created DESC', value: 'Date Created Descending' },
];

export const LeadStatusOptions = [
  { key: 'Lead', value: 'Lead' },
  { key: 'Assigned', value: 'Assigned' },
  { key: 'Contacting', value: 'Contacting' },
  { key: 'In Network', value: 'In Network' },
  { key: 'In Pre-Screening', value: 'In Pre-Screening' },
  { key: 'In Trial', value: 'In Trial' },
  { key: 'Do Not Contact', value: 'Do Not Contact' },
];

export const LeadsFilters = [
  { key: 'Form', value: 'Form' },
  { key: 'Status', value: 'Status' },
  { key: 'Created Date', value: 'Created Date' },
  { key: 'State', value: 'State' },
  { key: 'Birth Date', value: 'Birth Date' },
  { key: 'Gender', value: 'Gender' },
  { key: 'Ethnicity', value: 'Ethnicity' },
  { key: 'Call Time', value: 'Best Time to Call' },
  { key: 'Trial', value: 'Trial' },
  { key: 'Source', value: 'Source' },
  { key: 'Medium', value: 'Medium' },
  { key: 'Campaign', value: 'Campaign' },
  { key: 'Language', value: 'Language' },
];

export const PatientsFilters = [
  { key: 'Contact', value: 'Contact' },
  { key: 'Created Date', value: 'Created Date' },
  { key: 'Show Inactive Patients', value: 'Show Inactive Patients' },
];

export const PatientStatusOptions = [
  { key: patientStatuses.not_attempted, value: patientStatusesKeys.not_attempted },
  { key: patientStatuses.attempted, value: patientStatusesKeys.attempted },
  { key: patientStatuses.contacted, value: patientStatusesKeys.contacted },
  { key: patientStatuses.pre_screened, value: patientStatusesKeys.pre_screened },
  { key: patientStatuses.mrf_sent, value: patientStatusesKeys.mrf_sent },
  { key: patientStatuses.mrf_signed, value: patientStatusesKeys.mrf_signed },
  { key: patientStatuses.med_record_requested, value: patientStatusesKeys.med_record_requested },
  { key: patientStatuses.med_record_received, value: patientStatusesKeys.med_record_received },
  { key: patientStatuses.med_record_under_review, value: patientStatusesKeys.med_record_under_review },
  { key: patientStatuses.med_record_reviewed, value: patientStatusesKeys.med_record_reviewed },
  { key: patientStatuses.qualified, value: patientStatusesKeys.qualified },
  { key: patientStatuses.not_qualified, value: patientStatusesKeys.not_qualified },
];

export const TABLE_ROWS = [
  { key: '25', value: '25' },
  { key: '50', value: '50' },
  { key: '100', value: '100' },
];

export const ContactMethodsList = [
  { contactMethodId: 1, contactMethod: 'Email' },
  { contactMethodId: 2, contactMethod: 'Phone' },
  { contactMethodId: 3, contactMethod: 'Text' },
];

export const PreferredDayList = [
  { weekDayId: 1, weekDay: 'Sunday' },
  { weekDayId: 2, weekDay: 'Monday' },
  { weekDayId: 3, weekDay: 'Tuesday' },
  { weekDayId: 4, weekDay: 'Wednesday' },
  { weekDayId: 5, weekDay: 'Thursday' },
  { weekDayId: 6, weekDay: 'Friday' },
  { weekDayId: 7, weekDay: 'Saturday' },
];

export const BooleanValues = [
  { key: 'Yes', value: 'Yes' },
  { key: 'No', value: 'No' },
];

export const QuestionTypesList = [
  { key: 'boolean', value: 'Checkbox' },
  { key: 'text', value: 'Text' },
  { key: 'dateonly', value: 'Date Only' },
  { key: 'datetime', value: 'Date-Time - Web Only' },
  { key: 'select', value: 'Dropdown' },
  { key: 'email-send', value: 'Email Send (Disabled)' },
  { key: 'file', value: 'File Upload - Web Only' },
  { key: 'image', value: 'Image Upload' },
  { key: 'image-display', value: 'Image Display - Web Only' },
  { key: 'inventory-code', value: 'Inventory Code - Web Only' },
  { key: 'textarea', value: 'Multi-Line Text' },
  { key: 'multi-select', value: 'Multiple Choice (Multiple Selection)' },
  { key: 'radio', value: 'Multiple Choice (Single Selection)' },
  { key: 'multi-true-false', value: 'Multiple Choice (True/False)' },
  { key: 'multi-yes-no', value: 'Multiple Choice (Yes/No)' },
  { key: 'number-decimal', value: 'Number (Decimal)' },
  { key: 'number-integer', value: 'Number (Integer)' },
  { key: 'signature', value: 'Signature - Web Only' },
  { key: 'timeonly', value: 'Time Only' },
  { key: 'video-playback', value: 'Video Playback' },
  { key: 'video', value: 'Video Upload' },
];

export const ImageQualities = [
  { key: 'medium', value: 'Medium' },
  { key: 'high', value: 'High' },
  { key: 'original', value: 'Original' },
];

export const FlashSettings = [
  { key: 'auto', value: 'Auto' },
  { key: 'on', value: 'On' },
  { key: 'off', value: 'Off' },
];

export const AskIfOperatorList = [
  { key: AskIfOperators.EqualTo, value: AskIfOperators.EqualTo },
  { key: AskIfOperators.NotEqualTo, value: AskIfOperators.NotEqualTo },
  { key: AskIfOperators.GreaterThan, value: AskIfOperators.GreaterThan },
  { key: AskIfOperators.LessThan, value: AskIfOperators.LessThan },
  { key: AskIfOperators.GreaterThanAndEqualTo, value: AskIfOperators.GreaterThanAndEqualTo },
  { key: AskIfOperators.LessThanAndEqualTo, value: AskIfOperators.LessThanAndEqualTo },
];

export const NOTIFICATIONS_SORT_DROPDOWN_OPTIONS = [
  { value: 'trial', label: 'Sort By Trial' },
  { value: 'patient', label: 'Sort By Patient' },
  { value: 'date', label: 'Sort By Date' },
];

export const NOTIFICATIONS_SHOW_COMPLETE_DROPDOWN_OPTIONS = [
  { value: false, label: 'View Active' },
  { value: true, label: 'View Completed' },
];

export const FormDurationOptions = [
  { duration: 0, value: 'All Day' },
  { duration: 15, value: '15 min' },
  { duration: 30, value: '30 min' },
  { duration: 45, value: '45 min' },
  { duration: 60, value: '1 hour' },
  { duration: 90, value: '1.5 hours' },
  { duration: 120, value: '2 hours' },
  { duration: 180, value: '3 hours' },
  { duration: 240, value: '4 hours' },
  { duration: 360, value: '6 hours' },
  { duration: 480, value: '8 hours' },
];

export const FormExpirationOptions = [
  { expireHour: 0, value: 'Never' },
  { expireHour: 1, value: '1 hour' },
  { expireHour: 2, value: '2 hour' },
  { expireHour: 3, value: '3 hour' },
  { expireHour: 4, value: '4 hour' },
  { expireHour: 5, value: '5 hour' },
  { expireHour: 6, value: '6 hour' },
  { expireHour: 7, value: '7 hour' },
  { expireHour: 8, value: '8 hour' },
  { expireHour: 9, value: '9 hour' },
  { expireHour: 10, value: '10 hour' },
  { expireHour: 11, value: '11 hour' },
  { expireHour: 12, value: '12 hour' },
  { expireHour: 13, value: '13 hour' },
  { expireHour: 14, value: '14 hour' },
  { expireHour: 15, value: '15 hour' },
  { expireHour: 16, value: '16 hour' },
  { expireHour: 17, value: '17 hour' },
  { expireHour: 18, value: '18 hour' },
  { expireHour: 19, value: '19 hour' },
  { expireHour: 20, value: '20 hour' },
  { expireHour: 21, value: '21 hour' },
  { expireHour: 22, value: '22 hour' },
  { expireHour: 23, value: '23 hour' },
  { expireHour: 24, value: '1 day' },
  { expireHour: 48, value: '2 day' },
  { expireHour: 72, value: '3 day' },
  { expireHour: 96, value: '4 day' },
  { expireHour: 120, value: '5 day' },
  { expireHour: 144, value: '6 day' },
  { expireHour: 168, value: '7 day' },
  { expireHour: -1, value: 'Use Template Day Range' },
];

export const FormTimeOfDayOptions = [
  { timeOfDay: 'ALL_DAY', value: 'All Day' },
  { timeOfDay: 'PREFERRED_NOTIFICATION_TIME', value: 'Patient\'s Preferred Notification Time' },
  { timeOfDay: 'SPECIFIC_TIME', value: 'Specific Time Period' },
];

export const FormReminderOptions = [
  { reminder: 0, value: 'No Reminder' },
  { reminder: 5, value: '5 min' },
  { reminder: 15, value: '15 min' },
  { reminder: 30, value: '30 min' },
  { reminder: 45, value: '45 min' },
  { reminder: 60, value: '1 hour' },
];

export const Months = [
  { key: '0', value: 'JAN' },
  { key: '1', value: 'FEB' },
  { key: '2', value: 'MAR' },
  { key: '3', value: 'APR' },
  { key: '4', value: 'MAY' },
  { key: '5', value: 'JUN' },
  { key: '6', value: 'JUL' },
  { key: '7', value: 'AUG' },
  { key: '8', value: 'SEP' },
  { key: '9', value: 'OCT' },
  { key: '10', value: 'NOV' },
  { key: '11', value: 'DEC' },
];

export const patientAutoFill = [
  { key: 'patientNoraId', value: 'Patient NORA User ID' }, // username
  { key: 'patientNameAll', value: 'Patient Full Name' },
  { key: 'patientNameLast', value: 'Patient Last Name' },
  { key: 'patientNameFirst', value: 'Patient First Name' },
  { key: 'patientNameMiddle', value: 'Patient Middle Initial' },
  { key: 'patientGender', value: 'Patient Gender' },
  { key: 'patientAge', value: 'Patient Age' },
  { key: 'patientBirthDate', value: 'Patient Birth Date' },
];

export const LarRelationships = [
  { key: 'Parent', value: 'Parent' },
  { key: 'Guardian', value: 'Guardian' },
  { key: 'Other', value: 'Other' },
];

export const WorkflowsWithLangSupport = [
  { module: Workflows.PatientNoteResearchKit },
  { module: Workflows.PatientNote },
  { module: Workflows.Consent },
];

export const AuditTrailFilters = [
  { key: 'createdBy', value: 'Created By' },
  { key: 'createdDate', value: 'Created Date' },
  { key: 'updatedBy', value: 'Updated By' },
  { key: 'updatedDate', value: 'Updated Date' },
  { key: 'object', value: 'Object' },
  { key: 'objectID', value: 'Object ID' },
  { key: 'fieldName', value: 'Field Name' },
  { key: 'transactionType', value: 'Transaction Type' },
  { key: 'oldValue', value: 'Old Value' },
  { key: 'newValue', value: 'New Value' },
  { key: 'parentTrialID', value: 'Trial' },
  { key: 'parentPatientID', value: 'Patient' },
  { key: 'parentFormName', value: 'Form' },
  { key: 'editReason', value: 'Edit Reason' },
  { key: 'parentObjectID', value: 'Parent Object ID' },
  { key: 'parentObject', value: 'Parent Object' },
];

export const AuditFiltersDropdown = [
  { key: 'createdBy', value: 'Created By' },
  { key: 'createdDate', value: 'Created Date' },
  { key: 'updatedBy', value: 'Updated By' },
  { key: 'updatedDate', value: 'Updated Date' },
  { key: 'object', value: 'Object' },
  { key: 'transactionType', value: 'Transaction Type' },
  { key: 'parentTrialID', value: 'Trial' },
  { key: 'parentPatientID', value: 'Patient' },
  { key: 'parentFormName', value: 'Form' },
];

export const TransactionTypes = [
  { key: 'New', value: 'New' },
  { key: 'Update', value: 'Update' },
  { key: 'Delete', value: 'Delete' },
];

export const FrequencyOptions = [
  { key: 'schedule', value: 'Follow Schedule Template' },
  { key: 'oneTime', value: 'One Time' },
  { key: 'daily', value: 'Daily' },
  { key: 'weekly', value: 'Weekly' },
];

export const NotificationFrequencyOptions = [
  { key: 'NEVER', value: 'Never' },
  { key: 'DAILY', value: 'Daily' },
  { key: 'WEEKLY', value: 'Weekly' },
];

export const PatientPhotosOptions = [
  { key: 'title', value: 'Photo' },
  { key: 'file', value: 'File' },
  { key: 'createdAt', value: 'Uploaded Date' },
];

export const PatientDocumentsOptions = [
  { key: 'title', value: 'Document Name' },
  { key: 'file', value: 'File' },
  { key: 'createdAt', value: 'Uploaded Date' },
];

export const DispenseSubjectIdOptions = [
  { key: DispenseSubjectId.ScreeningNumber, value: DispenseSubjectId.ScreeningNumber },
  { key: DispenseSubjectId.SubjectNumber, value: DispenseSubjectId.SubjectNumber },
];

export const IntegrationAdminFilters = [
  { key: 'edcMessageId', value: 'EDC Message ID' },
  { key: 'uuid', value: 'UUID' },
  { key: 'trialAccountId', value: 'Trial Account ID' },
];

export const IntegrationColumnParams = [
  { label: 'EDC Message ID', dataKey: 'id' },
  { label: 'UUID', dataKey: 'uuid' },
  { label: 'Created', dataKey: 'created' },
  { label: 'Trial Account ID', dataKey: 'trialAccountId' },
  { label: 'Note', dataKey: 'hasComment' },
  { label: 'Status', dataKey: 'state' },
  { label: 'Error Summary', dataKey: 'error' },
];

export const IntegrationStatusOptions = [{ status: 'Ready' }, { status: 'Skipped' }, { status: 'Paused' }];

export const RepeatKeyOptions = [
  { key: 'None', value: 'None' },
  { key: 'Visit', value: 'Visit' },
  { key: 'Form', value: 'Form' },
  { key: 'Unplanned', value: 'Unplanned' },
];

export const UserStatusOptions = [
  { key: 'active', value: 'Active' },
  { key: 'deactivated', value: 'Deactivated' },
];
