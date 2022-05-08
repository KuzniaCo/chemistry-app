import { StyleSheet, View } from 'react-native'
import { useEffect, useState } from 'react'
import { Calendar, LocaleConfig } from 'react-native-calendars';

const CalendarComponent = ({ activeDayList }) => {
    const [activeDays, setActiveDays] = useState({});

    useEffect(() => {
        const convertedDates = convertDates(activeDayList);
        setActiveDays(convertedDates);
    }, []);

    const convertDates = (dates) => {
        return dates.reduce((prev, curr) => {
            prev[curr] = {
                disabled: true,
                startingDay: true,
                color: '#729FC4',
                textColor: 'transparent',
                endingDay: true
            }
            return prev
        }, {});
    }

    LocaleConfig.locales['pl'] = {
        monthNames: [
            'Styczeń',
            'Luty',
            'Marzec',
            'Kwiecień',
            'Maj',
            'Czerwiec',
            'Lipiec',
            'Sierpień',
            'Wrzesień',
            'Październik',
            'Listopad',
            'Grudzień'
        ],
        monthNamesShort: ['st', 'lut', 'mrz', 'kw', 'maj', 'cz', 'lip', 'sier', 'wrz', 'paź', 'lis', 'gr'],
        dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
        dayNamesShort: ['pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.', 'niedz.'],
        today: 'Dzisiaj'
    };
    LocaleConfig.defaultLocale = 'pl';


    return (
        <View style={[styles.view]}>
            <Calendar
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={true}
                markingType={'period'}
                markedDates={activeDays}
                hideDayNames={true}
                monthFormat={'MMMM'}
                style={[styles.calendar, styles.shadowProp]}
                local
                theme={{
                    backgroundColor: '#729FC4',
                    monthTextColor: '#ffffff',
                    textMonthFontSize: 20,
                    dayTextColor: 'transparent',
                    todayTextColor: 'transparent',
                    'stylesheet.calendar.main': {
                        container: {
                            paddingRight: 0,
                            paddingLeft: 0,
                            borderRadius: 20,
                        },
                        monthView: {
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            backgroundColor: '#DBEBF9'
                        }
                    },

                }}

            />
        </View>
    )
}

export default CalendarComponent

const styles = StyleSheet.create({
    view: {
        width: '100%',
        borderRadius: 20,
    },
    calendar: {
        backgroundColor: '#729FC4',
        width: '85%',
        alignSelf: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 3,
    },
})