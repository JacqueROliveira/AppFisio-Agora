import { Pressable, PressableProps, Text, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

type Props = PressableProps & {
  data: {
    nome: string
    senha: string
  }
  onDelete: () => void
  onOpen: () => void
}

export function Patient({ data, onDelete, onOpen, ...rest }: Props) {
  return (
    <Pressable
      style={{
        backgroundColor: "#00FF00",
        padding: 4,
        borderRadius: 5,
        gap: 10,
        flexDirection: "row",
      }}
      {...rest}
    >
      <Text style={{ flex: 1 }}>
        {data.senha} - {data.nome}
      </Text>

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>

      <TouchableOpacity onPress={onOpen}>
        <MaterialIcons name="visibility" size={24} color="blue" />
      </TouchableOpacity>
    </Pressable>
  )
}
