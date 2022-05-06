import { StatusBar, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import axios from "axios";

const CalendarComponent = ({ userID }) => {
    const [activeDays, setActiveDays] = useState({});
    const url = `/api/${userID}/dates`;

    useEffect(() => {
        getActiveDays();
    }, []);

    const getActiveDays = async () => {
        try {
            const response = await axios.get(url);
            const convertedDates = convertDates(response.data);
            setActiveDays(convertedDates);
        } catch (er) {
            console.log(er);
        }
    };

    const convertDates = (dates) => {
        return dates.reduce((prev, curr) => {
            prev[curr] = {
                disabled: true,
                startingDay: true,
                color: "#729FC4",
                textColor: "transparent",
                endingDay: true,
            };
            return prev;
        }, {});
    };

    LocaleConfig.locales["pl"] = {
        monthNames: [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień",
        ],
        monthNamesShort: [
            "st",
            "lut",
            "mrz",
            "kw",
            "maj",
            "cz",
            "lip",
            "sier",
            "wrz",
            "paź",
            "lis",
            "gr",
        ],
        dayNames: [
            "Poniedziałek",
            "Wtorek",
            "Środa",
            "Czwartek",
            "Piątek",
            "Sobota",
            "Niedziela",
        ],
        dayNamesShort: ["pon.", "wt.", "śr.", "czw.", "pt.", "sob.", "niedz."],
        today: "Dzisiaj",
    };
    LocaleConfig.defaultLocale = "pl";

    return (
        <View style={[styles.view]}>
            <StatusBar backgroundColor={"transparent"} translucent />
            <Calendar
                hideArrows={true}
                hideExtraDays={true}
                disableMonthChange={true}
                markingType={"period"}
                markedDates={activeDays}
                hideDayNames={true}
                monthFormat={"MMMM"}
                style={[styles.calendar, styles.shadowProp]}
                local
                theme={{
                    // Caused a problem even tho the branch was cloned 1:1
                    // textMonthFontFamily: 'Inter',
                    backgroundColor: "#729FC4",
                    monthTextColor: "#ffffff",
                    textMonthFontSize: 20,
                    dayTextColor: "transparent",
                    todayTextColor: "transparent",
                    "stylesheet.calendar.main": {
                        container: {
                            paddingRight: 0,
                            paddingLeft: 0,
                            borderRadius: 20,
                        },
                        monthView: {
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            backgroundColor: "#DBEBF9",
                        },
                    },
                }}
            />
        </View>
    );
};

export default CalendarComponent;

const styles = StyleSheet.create({
    view: {
        // Changed from 85% to make the items be even
        width: "100%",
        // Deleted because the element took too much space
        // and without height it had the same size

        // height: "100%",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 20,
        // Adding to make the gaps between items in Main View consistent
        marginVertical: 10,
    },
    calendar: {
        backgroundColor: "#729FC4",
    },
    shadowProp: {
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 3,
    },
});
