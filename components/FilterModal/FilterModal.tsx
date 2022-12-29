import { useContext, useEffect } from 'react';
import { Pressable, Text, View, Modal, TouchableOpacity } from 'react-native';
import { AppContext } from '../../utils/Context/Context';
import CustomSlider from '../CustomSlider/CustomSlider';
import styles from './styles';

type FilterModalType = {
    isVisible: boolean,
    onClose: () => void
}

const FilterModal = ({isVisible, onClose}: FilterModalType) => {  
  const { context, dispatch } = useContext(AppContext);

  const changeDistance = (value: number) => {
    dispatch({type: 'updateFilterDistance', payload: value});
  }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                onClose();
            }}
        >
            <TouchableOpacity style={styles.modal} onPress={() => onClose()} activeOpacity={1}>
                <View style={styles.modalBody}>
                    <Text style={styles.header}>Filters</Text>
                    <CustomSlider title='Distance' min={0} max={20} units='miles' onChange={changeDistance} />
                    <View style={styles.buttonWrapper}>
                        <Pressable
                            onPress={() => {
                                onClose();
                                dispatch({type: 'updateFilterDistance', payload: 5})
                            }}
                        >
                            <Text style={styles.clearButton}>Clear all</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => onClose()}
                        >
                            <View style={styles.continueButton}>
                                <Text style={styles.continueButtonText}>Apply</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    )
};

export default FilterModal;