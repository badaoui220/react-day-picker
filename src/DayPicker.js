import React, { Component } from 'react';
import * as DateUtils from './DateUtils';
import * as LocaleUtils from './LocaleUtils';
import * as ModifiersUtils from './ModifiersUtils';

export class DayPicker extends Component {
  static VERSION = '7.2.3';

  dayPicker = null;

  render() {
    return <div>coucou</div>;
  }
}

DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

export { DateUtils, LocaleUtils, ModifiersUtils };

export default DayPicker;
